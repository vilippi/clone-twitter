const Tweet = ({ username, name, avatar, content, timestamp }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm mb-4 flex gap-4">
            {/* Avatar */}
            <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
            />

            {/* Conteúdo do tweet */}
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="font-bold">{name}</span>
                    <span className="text-gray-500">@{username} · {timestamp}</span>
                </div>
                <p className="mt-1 text-gray-800">{content}</p>
            </div>
        </div>
    )
}

export default Tweet